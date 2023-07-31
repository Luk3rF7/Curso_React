<h1 align="center"> React - Life Cycle  Part 1</h1>

<p style="font-size:18px;"> 
  eu quero renderizar eu quero que alguma coisa ocorra eu utilizo lifecycle method:

  <li style="font-size:18px"> componentDidMount(){}

ele sera metodo igual render quando component for
montado e alguma cois aconteça;ele sera executado 1 vez e ponto, posso adicionar api no DidMount exemplo :

          componentDidMount(){
            this.setState({
              posts: [
                {
                  id:1,
                  title:"Titulo dentro do Mount",
                  body:"LifeCycle method"
                },
                {
                  id:2,
                  title:"Titulo dentro do Mount",
                  body:"LifeCycle method"
                },
                {
                  id:3,
                  title:"Titulo dentro do Mount",
                  body:"LifeCycle method"
                },
              ]
            })
          }
</p>

<li style="font-size:18px;"> ComponentDidUpdate 

outro metodo do lifeCycle ele recebe parametro: 
prevProps,prevState e snapshot

          class App extends Component {
              state = { 
                counter:0,
                posts: [
                {
                  id:1,
                  title:"Titulo dentro do Mount",
                  body:"LifeCycle method"
                },
                {
                             id:2,
                             title:"Titulo dentro do Mount",
                  body:"LifeCycle method"
                },
                  {
                    id:3,
                    title:"Titulo dentro do Mount",
                    body:"LifeCycle method"
                  },
                ]
                };  
                timeoutUpdate = null
                componentDidMount(){
                  this.handleTimeout();
                }

                  componentDidUpdate(){
                    clearTimeout(this.timeoutUpdate)
                    this.handleTimeout();
                  }

                  handleTimeout = () => {
                    const { posts,counter } = this.state;
                    posts[0].title = 'O titulo mudou '
                    posts[0].body = "atualizou"
                    //fazendo isso para ter acesso ao time out
                   this.timeoutUpdate = setTimeout(() => {
                      this.setState({
                          posts,
                          counter: counter + 1,
                      })
                    },2000)
                          }      
                   }       


<li style="font-size:18px;"> ComponentWillUnmount 

utilizado para limpar lixo 