#!/usr/bin/bash

sqlite3 db.sqlite 'SELECT * FROM blog_posts;'
