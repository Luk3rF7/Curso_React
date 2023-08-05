<h1> SnapShot teste</h1>
<p> o snapshot server para tirar copia do seu componente </p>


             const {container} = render(<PostCard {...props} />);
            expect(container.firstChild).toMatchSnapshot();

<p> ele vai criar foto do seu codigo 
<p> caso a gente mude para atualizar digitamos u