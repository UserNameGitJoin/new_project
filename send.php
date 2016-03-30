<?php
$r = $_POST['elements'];
parse_str($r, $output);
$name = $output['name'];
$phone = $output['phone'];
if($name AND $phone){
    
    
    
        // отправка нескольким адресатам
    $to  = 'ya.redgreen@ya.ru' . ', '; // кому отправляем
   // $to .= 'friend2@yourmail.ru' . ', '; // Внимание! Так пишем второй и тд адреса
    // не забываем запятую. Даже в последнем контакте лишней не будет
    // Для начинающих! $to .= точка в этом случае для Дописывания в переменную 

    // содержание письма
    $subject = "Тема сообщения";
    $message = '
    <html>
        <head>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Тема страницы</title>
        </head>
        <body>
            <p>А здесь ваше сообщение</p>
        </body>
    </html>';

    // устанавливаем тип сообщения Content-type, если хотим
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";

    // дополнительные данные
    $headers .= "From: yournick <yournick@yourmail.ru>\r\n"; // от кого
   // $headers .= 'Cc: secondnick@example.com' . "\r\n"; // копия сообщения на этот адрес
    //$headers .= "Bcc: yournick-archive@yourmail.ru\r\n"; // скрытая копия сообщения на этот
    if(mail($to, $subject, $message, $headers)){
        echo 'true';
    }
    else return false;
}
else{
    return false;
}

?>