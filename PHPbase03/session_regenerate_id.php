<?php

session_start();

$old_sessionid=session_id();

session_regenerate_id(true);

$new_sessionid=session_id();

echo "old:$old_sessionid<br>";
echo "new:$new_sessionid<br>";

 ?>
