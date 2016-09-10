/*  
    +-----------------------------------------------------------+  
    |               Escola SENAI de Informática                 |
    |                  Endeavor & J.P. Morgan                   |
    |    Curso de Desenvolvedor Multiplataforma Web & Mobile    |
    |               Desafio JavaScript TODO List                |
    |           Aluno:  Victor Rubens da Silva Santos           |
    |                   Equipe: Trade Force                     | 
    +-----------------------------------------------------------+  
*/
    var count = 8;
    function readJSON() {
        var tarefas = JSON.parse(JSON.stringify(data));
        var newLine = '';
        document.getElementById('ListFeitas').innerHTML = '';
        document.getElementById('ListNaoFeitas').innerHTML = '';
        for (var index = 0; index < Object.keys(tarefas).length; index++) {
            if (tarefas[index].feito === 1) {
                //FEITAS
                newLine =  '<li id="Fli'+tarefas[index].id +'">\
                            <label>\
                            <input type="checkbox" id="Fcheck'+tarefas[index].id +'" onclick="appendListFeitas('+tarefas[index].id +');">\
                            <p>'+tarefas[index].descricao +' </p>\
                            <a href="javascript: removeTarefa('+tarefas[index].id +')" title="×" >×</a>\
                            </label>\
                            </li>';
                document.getElementById('ListFeitas').innerHTML += newLine  
            }
            else{
                //NAO FEITAS
                newLine =  '<li id="NFli'+tarefas[index].id +'">\
                            <label>\
                            <input type="checkbox" id="NFcheck'+tarefas[index].id +'" onclick="appendListNaoFeitas('+tarefas[index].id +');">\
                            <p>'+tarefas[index].descricao +' </p>\
                            <a href="javascript: removeTarefa('+tarefas[index].id +')" title="×" >×</a>\
                            </label>\
                            </li>';
                document.getElementById('ListNaoFeitas').innerHTML += newLine  
            }
        }
    }

    function clickNaoFeitas(){
        document.getElementById('tabFeitas').className = "";
        document.getElementById('tabNaoFeitas').className = "active";
        document.getElementById('naoFeitas').className = "active";
        document.getElementById('feitas').className = "";
    }

    function clickFeitas(){
        document.getElementById('tabNaoFeitas').className = "";
        document.getElementById('tabFeitas').className = "active";
        document.getElementById('naoFeitas').className = "";
        document.getElementById('feitas').className = "active";
    }

    function appendListFeitas(id){
        var checkID = "Fcheck"+id;
        var liID = "Fli" + id;
        var ul = document.getElementById('ListFeitas');
        var li = document.getElementById(checkID).parentNode.parentNode;
        var ListNaoFeitas = document.getElementById('ListNaoFeitas');
        var clone   = li.cloneNode(true);
        ListNaoFeitas.appendChild(clone);
        ListNaoFeitas.innerHTML = ListNaoFeitas.innerHTML.replace('id="Fcheck','id="NFcheck');
        ListNaoFeitas.innerHTML = ListNaoFeitas.innerHTML.replace('onclick="appendListFeitas','onclick="appendListNaoFeitas');
        ListNaoFeitas.innerHTML = ListNaoFeitas.innerHTML.replace('id="Fli2','id="NFli2');
        ul.removeChild(li);
        if(document.querySelector('input[type="checkbox"]:checked')) {false};
       
    }

    function appendListNaoFeitas(id){
        var checkID = "NFcheck"+id;
        var liID = "NFli" + id;
        var ul = document.getElementById('ListNaoFeitas');
        var li = document.getElementById(checkID).parentNode.parentNode;
        var ListFeitas = document.getElementById('ListFeitas');
        var clone   = li.cloneNode(true); 
        ListFeitas.appendChild(clone);
        ListFeitas.innerHTML = ListFeitas.innerHTML.replace('id="NFcheck','id="Fcheck');
        ListFeitas.innerHTML = ListFeitas.innerHTML.replace('onclick="appendListNaoFeitas','onclick="appendListFeitas');
        ListFeitas.innerHTML = ListFeitas.innerHTML.replace('id="NFli2','id="Fli2');
        ul.removeChild(li);
        if(document.querySelector('input[type="checkbox"]:checked')) {false};
    }

    function removeTarefa(id){
        var NFliID = "NFli" + id;
        var FliID2 = "Fli" + id;
        if (document.getElementById(NFliID)) {
            var NFul = document.getElementById(NFliID).parentNode;
            var NFli = document.getElementById(NFliID);
            NFul.removeChild(NFli);
        }
        else{
            var Ful = document.getElementById(FliID2).parentNode
            var Fli = document.getElementById(FliID2)
            Ful.removeChild(Fli);
        }
    }

    function addTask(){
        var descricao = document.getElementById("txtDescricao").value;
        var spanErro = document.getElementById("erro").innerHTML.length;
        if((spanErro == 0 ) && (descricao.trim().length > 0)) {
            newLine =  '<li id="NFli'+count+'">\
                        <label>\
                        <input type="checkbox" id="NFcheck'+count+'" onclick="appendListNaoFeitas('+count+');">\
                        <p>'+count+' '+descricao+' </p>\
                        <a href="javascript: removeTarefa('+count+')" title="×" >×</a>\
                        </label>\
                        </li>';
            document.getElementById('ListNaoFeitas').innerHTML += newLine ;
            document.getElementById("txtDescricao").value = '';
            document.getElementById("contador").innerHTML = 140;
            count++;
        }
    }

    function contaCaracter(){
        var descricao = document.getElementById("txtDescricao").value.trim().length;
        var contador = document.getElementById("contador").innerHTML;
        if (descricao != 0) {
            document.getElementById("contador").innerHTML = 140 - descricao;
            document.getElementById("erro").innerHTML = '';
            if(descricao > 140){
                document.getElementById("erro").innerHTML = "Limite de caracteres excedido!";
                document.getElementById("contador").innerHTML = 0;
            }
        }
        else{
            document.getElementById("contador").innerHTML = 140;
            document.getElementById("erro").innerHTML = '';
        }
    }