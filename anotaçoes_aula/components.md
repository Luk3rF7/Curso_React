<h1 align="center"> React Aula - Components </h1>

<h2 align="center"> Components funcionais </h2>

<p style="font-size:18px;">
<b>Os components funcionais são baseado em função ,onde eles renderiza uma parte da função.</b>
A gente vai falar do estado já há um pouquinho para frente  mas a gente teria componentes defunção que
seriam componentes sem Estado e a gente teriaantigamente isso não não é assim hoje em dia agente teria
componentes de d classe com o Estado.
Então a gente tinha antigamente componentes estruturais que seriam sem Estado e componentes que seriam
com estado beleza.
Esses componentes eram divididos entre componentes que têm estado devem ser classes e componentes que
não têm estado podem ser funções ou classes sem estados.
Também se você quiser.
Então aqui há esse componente que ele não tem estado.
Então ele é um excelente componente mas hoje em dia a gente pode ter funções usando rocks e aí a gente
utiliza os russos pra controlar o Estado.
Então hoje em dia isso não se aplica mais beleza então você não precisa saber essa diferenciação está
aí beleza estética.
</p>
<hr>

<h3>

            ==== Components less ====
          function App() {
        return (
          <div className="App">
             <h1>Hello world React js</h1>
            </div>
          );
        }

        export default App;

<h2 align="center"> Components de Classe </h2>
<p>
  
<h3>

     import { Component } from 'react';
      import './App.css';

      class App extends Component {
           render() {
          return (
           <div>
             <h1> Hello world com class </h1>
          </div>
                )
            }
        }
        export default App; 
</h3>
<p style="font-size:18px;">
  O estado (state) são dados que componente utiliza,podemos criar constructor onde ele recebe props ,quando utilizamos class precisamos  utilizar super() na constructor
  para poder utilizar do Component
</p>

<h3>

     import { Component } from 'react';
      import './App.css';

      class App extends Component {
        constructor(props){
          super(props)
          this.state = {}
        }
           render() {
          return (
           <div>
             <h1> Hello world com class </h1>
          </div>
                )
            }
        }
          export default App; 
</h3>
<hr>
<p style="font-size:18px;">
    podemos adicionar atributos como onClick onde pode receber
    state,função e eventos:

<h3>

    sintaxe: 
       onClick={}
</h3>

<p style="font-size:18px;">
não consigo acessar variavel do metodo class por que react não faz bind,e teremos que fazer manualmente chamado bind metody para fazer isso :

<h3>

                      constructor(props){
               super(props);
               this.handlePClick = this.handlePClick.bind(this);
               this.state = {
                  name:"Lucas felipe",
                  frase:"Estou dentro de state sendo visualizado e sou dinamico posso mudar toda hora",
                  frase2:"Que legal,fiz metodo bindmetody para renderizar state no metodo handleClick"
                };
 
              }
               handlePClick() {
                 const { frase2 } = this.state
                 console.log(frase2)
               }

<h3>
  <li style="font-size:18px;"> forma mais curta :

  <p style="font-size:18px;"> podemos mudar o state utilizando setState
  conforme o exemplo:

<h3>

            handlePClick() {
            this.setState({ name:"mudei valor do state name"})
            }
</h3>

<h2 align="center">  Single Page com Class

<h4>

         class App extends Component {
                      
            constructor(props){
              super(props);
              this.handlePClick = this.handlePClick.bind(this);
              this.state = {
                name:"Lucas felipe",
                frase:"Estou dentro de state sendo visualizado e sou dinamico posso mudar toda hora",
                frase2:"Que legal,fiz metodo bindmetody para renderizar state no metodo handleClick",
                counter: 0
              };

            }
              handlePClick = () => {
              this.setState({ name:"mudei valor do state name"})
              };

             handleAClick = (event) => {
                event.preventDefault();
                const { counter} = this.state;
                this.setState({counter:counter + 1})
              } ;
  
              render() {
              /* utilize destructor para facilitar */
              /* com destructor */
              const {frase }= this.state
              /*  sem destructor */
              const { name,counter} = this.state
              return (
                <div>
                <h1> Hello world com class </h1>
                <h2>
                {frase}
                </h2>
                <p onClick={this.handlePClick}>
                 Name: {name} {counter}
                </p>
                <a 
                onClick={this.handleAClick}
                className="App-link"
                href="/#"
                >
                  click para adicionar + 1 :
                </a>

              </div>
              )
            }
          }

          export default App; 
