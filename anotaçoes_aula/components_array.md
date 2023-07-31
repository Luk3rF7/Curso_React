<h1 align="center">  React - components com Arrays e Objetos </h1>


<p style="font-size:18px;">
  a gente utiliza metodo do array para iterar com jsx :
  vai aparecer erro de 'warn Each child in  a List unique in key prop'
  isso aparece porque React precisa de uma forma de identificar esses elementos


                  class App extends Component {
          state = { 
           posts: [
           {
             id:1,
            title:' O titulo 1',
            body:"O corpo 1"
           },
           {
             id:2,
            title:' O titulo 2',
            body:"O corpo 2"
           },
           {
             id:3,
            title:' O titulo 3',
            body:"O corpo 3"
           },
           ]
          };  
  
            render(){
              const { posts } = this.state;

              return (
                <div className="App">
                  <h1> Aula Components com Array e Objetos</h1>
                    <h3> pegando os posts do Objeto</h3>
                    {  // utilizamos map para iterar entre array e obj
                      posts.map(post => 
                       ==== utilizamos na key oque e unico com id,usar etc
                    <h1 key={post.id}> {post.title}</h1>)}
                </div>
              )
            }
          }

<p style="font-size:18px;">
      quando utilizamos () no jsx depois de iterar estamos retornando alguma 
      coisa dentro de uma função e vai ter mais de uma linha adicionando 
      fragmento exemplo: 

      {
        posts.map(post => (
          <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </div>
        ))
      }