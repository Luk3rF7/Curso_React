<h1 align="center"> useImperativeHandle introdução </h1>

<p style="font-size:16px;">
    Com o hook useImperativeHandle temos como acionar ações em um outro componente de forma imperativa;
    <br>
    Como não podemos passa refs como props,precisamo usar uma função fowardRef<br>
    isso vai nos permitir passa as referências,e torna o nosso exemplo viavel !

  <img src="./imghook/sintaxe_useImperativeHandle.png">

  <p style="font-size:16px;">
   Com forwardRef,nosso useImperativeHandle recebe ref
  </p>
  <li style="font-size:18px;">
  A gente cria um componente onde vai ser referenciado propriedade com ref={inputRef} ,onde importamos ele
  </li>
  <br>
  <hr />
  <img src="./imghook/useImperativeHandle.png">

  </p>

  <p style="font-size:16px;">
      Com isso podemos ter acesso a  props e ref

  <img src="./imghook/useImperativeHandle_1.png">

  <p>
    Com isso teremos tempo para execução no componente SomeComponet para  hook,utilizando current a gente consegui
    utilizar metodo passado dentro do useImperative aonde nosso hook passa para ref e valida ação
  </p>
  </p>
