import { pigSentence } from './back.js';
import { pigWord } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// User Logic
$(document).ready(function(){
  $("form#pigForm").submit(function(event){
    event.preventDefault();
    var englishInput = $("#english-input").val();
    var result = pigSentence(englishInput);
    $('#output').text(result);
  });
});
