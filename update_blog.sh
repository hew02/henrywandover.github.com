#!/usr/bin/bash

required_fields=("slug" "title" "date" "abstract" "keywords")

function check_field() {
		frontmatter="$1"
    field="$2"
    if ! echo "$frontmatter" | grep -q "^$field:"; then
        echo "Missing required field: $field"
        return 1
    fi
}

function parse_yaml_header 
{
		frontmatter=$(sed -n '/^---$/,/^---$/p' "$item" | sed '1d;$d')

		if [[ -z "$frontmatter" ]]; then
				echo "No YAML frontmatter found."
				return 1
		fi

		declare -A meta

    for field in "${required_fields[@]}"; do
        if echo "$frontmatter" | grep -q "^$field:"; then
            value=$(echo "$frontmatter" | sed -n "s/^$field: *//p")
						meta["$field"]=""$value""
        else
            echo -e "\e[1m$item is \e[mmissing required field: $field"
            exit 1
        fi
    done


    existing_title=$(sqlite3 data/db.sqlite "SELECT title FROM blog_posts WHERE title = '${meta[title]}';")
    
    if [[ -n "$existing_title" ]]; then
				echo "Updating '${meta[title]}' in database..."
				sqlite3 data/db.sqlite "UPDATE blog_posts SET 
					slug = '${meta[slug]}', date = '${meta[date]}', 
					abstract = '${meta[abstract]}', keywords = '${meta[keywords]}'
				WHERE title = ('${meta[title]}');" 
				echo "Updated post '${meta[title]}'."
        return 0
		else
				echo "Inserting '${meta[title]}' into the database..."
				sqlite3 data/db.sqlite "INSERT INTO blog_posts (slug, title, date, abstract, keywords) VALUES 
				(
						'${meta[slug]}', '${meta[title]}', '${meta[date]}', '${meta[abstract]}', '${meta[keywords]}'
				);"
				echo "Post '${meta[title]}' added to the database."

				return 0
    fi

		return 0
}


POSTS=($(find static/posts -name '*.htm'))

for item in "${POSTS[@]}"; do
		parse_yaml_header "$item" 
		echo ""
done
