import react from 'react';
function App(){
  return(
      <div>
        <nav>
          <center>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href=""></a>
          </center>
        </nav>
        <div>
          <center>
            <h1>Home</h1>
            <img  
            height={"400px"} 
            width={"100%"} src="https://media.istockphoto.com/id/1349349263/photo/cute-fluffy-friends-a-cat-and-a-dog-catch-a-flying-butterfly-in-a-sunny-summer.jpg?s=612x612&w=0&k=20&c=EnbbU794qwv66XcaDyszShJmRaiOuQ7XzP7XJh7Hyjg=" />
            <h1>About</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wE8s993ZV-8?si=adyCWpuVBU1oxZuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </center>
          <img height = "300px" width= "200px"
            src="https://media.istockphoto.com/id/1267021092/photo/funny-winking-kitten.jpg?s=612x612&w=0&k=20&c=9PoFYkqKZ30F_ubxX90_azwsR22ENwrFnOjxV0RaoTo=" />
            <img height = "300px" width= "200px"
            src="https://media.istockphoto.com/id/511804963/vector/happy-cat-and-dog.jpg?s=612x612&w=0&k=20&c=LkHg9lHTp8toN1kGpOH5PIyQX4GkC3DVlQkAUMPyoSw=" alt="" />
            <img height = "300px" width= "200px"
            src="https://media.istockphoto.com/id/820733230/photo/puppy-and-kitten.jpg?s=612x612&w=0&k=20&c=8f3V3uLVg_TGfzcaoP-afvLE1XaF4fWpv1OVnD1P5po=" alt="" />
            <img height = "300px" width= "200px"
            src="https://media.istockphoto.com/id/1273661469/photo/kitten-at-home-garden-wall.jpg?s=612x612&w=0&k=20&c=4WklSLBAJQrM1csS6XnUuuhNMWxhsiXctvXQWmF0WF4=" alt="" />
            <table border={1} width={"400px"} height="100px">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>organization</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>1</td>
                  <td>Tricky</td>
                  <td>S/W</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>JS</td>
                  <td>S/w</td>
                </tr>
              </tbody>
              <tfoot>
                <tr><td colSpan="3">Blah blah blah</td></tr>
              </tfoot>
            </table>

        </div>
        <center>
        
          <footer>
            <p>hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
            <h1>&copy; Cats Website.</h1>
            <nav>
              <a href="/privacy">Privacy Policy</a> |
              <a href="/terms">Terms of Service</a>
            </nav>

        </footer>
        </center>
      </div>
      
  ); 
}
export default App;