<?php
 
     //$to = "ok@zap-itsolutions.com"; //Change email here
    $to = "riaz_qadeer90@yahoo.com"; //Change email here
    
    $from = $_REQUEST['email']; 
    
    
   $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n"; 
    $subject = "Contact Us Message From Endorse Site "; 
 
   
        
        $body = '<html><body>';
$body .= '<img src="http://endorse.zap-itsolutions.com/img/logo.png" alt="endorse site logo" />';
$body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$body .= "<tr style='background: #eee;'><td><strong>Email:</strong> </td><td>" . strip_tags($_REQUEST['email']) . "</td></tr>";
$body .= "<tr><td><strong>OS:</strong> </td><td>" . strip_tags($_REQUEST['os']) . "</td></tr>";
$body .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
 
$body .= "</table>";
$body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);
 
?>