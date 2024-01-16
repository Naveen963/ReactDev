## React Components

Two Types of Components
--> Class Components (Old)
--> Functional Components (New/Modern)

### Function Component

The function which returns jsx code or React element called function component

     React Element =>  <h1 className="htag">Hello World 📈👨‍💻 </h1>

    const Title = () =>  (<h1 className="htag">Hello World 📈👨‍💻 </h1>)

## Component Compisition

- Using one component in another component
  (or)
- Component composition is the name for passing components as props to other components, thus creating new components with other components.

  const Title = () => (<h1 className="htag">Hello World 📈👨‍💻 </h1>)

  const Page = () => {
  <Title />
  <h2 className="htag">Hii... </h2>
  }

#### root.render() can able to render the React Elements and components

    - root.render(heading)  =>  const heading = <h1 className="htag">Hello World 📈👨‍💻 </h1>
    - root.render(<Title/>)  =>  const Title = () => (<h1 className="htag">Hello World 📈👨‍💻 </h1>)
