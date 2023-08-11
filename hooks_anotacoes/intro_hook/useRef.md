<h1 align="center"> introdução useRef</h1>

<p style='font-size:18px;'>O useRef pode ser utilizado como useState para gerenciar valores,a diferença e que ele é um objeto,seu valor está na propriedade current .
</p>
<li style="font-size:16px"> Outra particularidade do useRef e que ele não re-renderiza o componente ao ser alterado,sendo interessante alguns casos</li>

    O useRef tem sintaxe diferente onde para utiliza variavel utilizamos current !
  
<div>
<br>
  <img src="./imghook/useRef_1.png">

  <p tyle="font-size:18px;">
  Com isso podemos deixa-lo dinamico com utilização dos hook useState e useEffect,
  utilizando useEffect para renderizar,em
  caso useEffect com useState causaria um loop
  infinito,mas como utilizamo useRef ele renderiza por cada ação efetuada!
  </p>
  <img src="./imghook/useRef_2.png">
</div>

<h2 align="center"> UseRef Com DOM</h2>

<div>
  <p tyle="font-size:19px;">
    O useRef pode ser utilizado para selecionar elementos do JSX !
  </p>

  <li style="font-size:16px;">Podemos fazer manipulação de Dom ou aplicar funções focus,que foca no input! um dos uso muito interessante para este hook.
  <hr>
  <br>
  <img src="./imghook/useRef_dom_1.png">
  <li style="font-size:16px;"> Com manipulação de dom  e useRef a geente cria um atributo onde passaremos a variavel do hook ref={inputRef}
  <br>
  <hr>
  <img src="./imghook/useRef_dom_2.png">

  <br>
  <li>
  para obter valores dentro do useRef a gente pode utiliza seguinte maneira utilizando current
  </li>
  <hr>
  <img src="./imghook/useRef_value.png">

  <li> Com isso podemos utilizar metodo como focus(),aonde depois qeu usuario clicar ele vai ter focus no input novamente :

  <br>
  <img src="./imghook/useRef_inputRef.png">
  </div>
