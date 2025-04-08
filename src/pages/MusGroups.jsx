import PrettyBox from '/src/pieces/PrettyBox.jsx';
import "/src/styles/musgroups.css";


function MusGroups() {

  return(
    <>
    
    <h1>MusGroups - Documentation</h1> 
    <h3>News and information about Mus's godot tool.</h3>

    <p></p>

    
    <div class="container">
        <PrettyBox 
        title="Groups - Class" 
        body="The main class in my API which allows users to clone, modify, search for, and delete groups in the scene.
        This is super important and is basically already almost complete."
        to="groups"/>

        <PrettyBox
        title="Database - Class"
        body="This is gonna be super important for the turn based multiplayer and text chat applications of this tool. Users will be able to 
        communicate with a database to store and receive information that they can display or use however they want. Simplicy is the goal for
        this one."
        to=""/>

        <PrettyBox
        title="More Soon"
        body="Im gonna be adding some checklists to these groups so that everyone can more closely follow development, and I might expand this
        to become a wiki for the API since this is a lot to memorize specially with the mix of lua, godot, and API functions."
        to=""/>

        <PrettyBox
        title="bufoonery"
        link=""/>
        
        <PrettyBox/>
        <PrettyBox/>
        <PrettyBox/>
        <PrettyBox/>

          
    </div>
    </>
  );
}

export default MusGroups
