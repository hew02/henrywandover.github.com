precision highp float;

varying vec2 vTexCoord;
uniform sampler2D tex0;

uniform vec2 resolution;

uniform float scale;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1., 1., 1.);
  vec3 d = vec3(0.263, 0.416, 0.557);

  return a + b * cos(6.28318 * (c * t + d));
}

const float curvature = 9.0;
const float vignette_mod = 0.65;

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  vec2 centered_uv = uv * 2.0 - 1.0;
  vec2 uv_offset = centered_uv.yx / curvature;
  vec2 warped_uv = centered_uv + centered_uv * uv_offset * uv_offset;
  warped_uv = clamp(warped_uv, -1.0, 1.0);
  vec3 cutoff = vec3(step(abs(warped_uv.x), 1.0) * step(abs(warped_uv.y), 1.0));
  // Match size of pixels for the resolution y
  vec3 scanlines = vec3(sin(2.0 * warped_uv.y * (scale)) * 0.7 + 0.9);
  vec3 vignette = vec3(length(pow(abs(centered_uv), vec2(4.0)) / 3.0));

  vec3 screen_color =
      texture2D(tex0, (warped_uv + 1.0) / 2.0, 0.5).rgb * cutoff * scanlines;
  screen_color -= vignette * vignette_mod;
  gl_FragColor = vec4(screen_color, 1.0);
}