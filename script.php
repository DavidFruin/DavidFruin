<?php

header('Content-Type: application/json');

$pdo = new PDO('sqlite:userdata.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (isset($_GET['email'])) {
	$email = $_GET['email'];
	$stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE email = ?');

	$stmt->execute([$email]);
	$colCount = $stmt->fetchColumn();

	if ($colCount > 0) {
		echo "true"; 
	} else {
		echo "false";
	}
}

if (isset($_GET['password'])) {
	$password = $_GET['password'];
	$stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE password = ?');

	$stmt->execute([$password]);
	$colCount = $stmt->fetchColumn();

	if ($colCount > 0) {
		echo "true"; 
	} else {
		echo "false";
	}
}
