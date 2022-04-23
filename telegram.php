<?
// https"//api.telegram.org:'2082977303:AAEmz1rwxq68lhTJpHuxGjTpKp6tiW8QN5Q':getupdates
$server = "sql102.epizy.com";
$username = "epiz_30500676";
$password = "9WW0wrXoa8";

$dbname = "epiz_30500676_packetcodeofficial";
$name = $_POST['name'];
$number = $_POST['phone'];
$gruzName = $_POST['name1'];
$sendLocal = $_POST['name2'];
$thisLocal = $_POST['name3'];
$weight = $_POST['name4'];
$token = '2082977303:AAEmz1rwxq68lhTJpHuxGjTpKp6tiW8QN5Q';
$chat_id = '-723961830';


$arr = array(
    'Ф.И.О: ' => $name,
    'Номер телефона: ' => $number,
    'Наименование груза: ' => $gruzName,
    'Место отправки: ' => $sendLocal,
    'Место назначения: ' => $thisLocal,
    'Вес груза: ' => $weight,

);
foreach ($arr as $key => $value) :
    $text .= $key . $value . "%0A";
endforeach;

$telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&
  parse_emode=html&text={$text}", "o");

if ($telegram) {
    header('location: index.html');
} else {
    echo 'ERROR';
}
