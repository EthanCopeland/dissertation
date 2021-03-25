<?php

$ini['main'] = parse_ini_file("config.ini", true);

define('BASEPATH', $ini['main']['paths']['basepath']);
define('JWTKEY', $ini['main']['token']['token']);