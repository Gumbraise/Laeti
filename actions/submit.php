<?php

if(isset($_POST['submit'])) {
    if(!empty($_POST['pseudo'])) {
        if(isset($_POST['page']) AND isset($_POST['nom']) AND isset($_POST['description']) AND isset($_POST['email']) AND empty($_POST['description1']) AND empty($_POST['budjet']) AND empty($_POST['email1'])) {
            $sender = $_POST['email'];
            $mess = '
            Nouvelle commande depuis Internet ! (Tarifs Existants)<br>
            Pseudo : '.$_POST['pseudo'].'<br>
            Page : '.$_POST['page'].'<br>
            Nom de la demande : '.$_POST['nom'].'<br>
            Description de la commande : '.$_POST['description'].'<br>
            Email de '.$_POST['pseudo'].' : '.$_POST['email'];


            $to = "laetisansfin.contact@gmail.com";
            $email_subject = "Nouvelle coammande depuis Internet ! (Tarifs Existants)";
            $email_body = $mess;
            $headers = "From: $sender\n";
            $headers .= "Reply-To:".$_POST['email'];
    
            mail($to,$email_subject,$email_body,$headers);

            echo "ok";
        }
        else if(isset($_POST['description1']) AND isset($_POST['budjet']) AND isset($_POST['email1']) AND empty($_POST['page']) AND empty($_POST['nom']) AND empty($_POST['description']) AND empty($_POST['email'])) {
            $sender = $_POST['email1'];
            $mess = '
            Nouvelle commande depuis Internet ! (Demande Particulière)<br>
            Pseudo : '.$_POST['pseudo'].'<br>
            Description de la demande : '.$_POST['description1'].'<br>
            Budjet : '.$_POST['budjet'].'<br>
            Email de '.$_POST['pseudo'].' : '.$_POST['email1'];


            $to = "laetisansfin.contact@gmail.com";
            $email_subject = "Nouvelle coammande depuis Internet ! (Demande Particulière)";
            $email_body = $mess;
            $headers = "From: $sender\n";
            $headers .= "Reply-To:".$_POST['email'];
    
            mail($to,$email_subject,$email_body,$headers);

            echo "ok";
        }
        else {
            echo "Erreur1";
        }
    }
    else {
        echo "Erreur2";
    }
}
else {
    echo "Erreur3";
}