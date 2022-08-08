import React, { Component } from 'react'
import './App.css'
 class App extends Component {
 
        state = {
          fullName : "Tchikou Ramy" ,
          profession : "Developpeur Web" ,
          bio : "je suis un developpeur web et je suis passionné par le développement web (futur)" ,
          image : "https://www.bing.com/images/search?view=detailV2&ccid=5h6qqi0l&id=AFDE6140DB6EF94FF40C78B0CB2045EF60418CC6&thid=OIP.5h6qqi0lzUIe3NaPztftNwHaFH&mediaurl=https%3a%2f%2fwww.vhv.rs%2ffile%2fmax%2f17%2f176481_ez-emote-png.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e61eaaaa2d25cd421edcd68fced7ed37%3frik%3dxoxBYO9FIMuweA%26pid%3dImgRaw%26r%3d0&exph=581&expw=840&q=ez+emote&simid=608033534064885577&FORM=IRPRST&ck=78B4D6CEC09BEBDCBF86F50DA692CBEC&selectedIndex=2" ,
          show: true,
          cnt: 0,
        };

        handleClick = () => {
          this.setState({ show: !this.state.show });
        };
        componentDidMount() {
          setInterval(() => {
            this.setState((prevState) => ({
              cnt: prevState.cnt + 0.5,
            }));
          },1000);
        }
      
        render() {
          return (
            <div className="pos app">
              <div className="box">
                {this.state.show && (
                  <div className="inf">
                    <div className="pos profImg">
                      <img src={this.state.image} alt="" />
                    </div>
                    <section className="pos">
                      <h1>{this.state.fullName}</h1>
                      <h3>{this.state.profession}</h3>
                      <p>{this.state.bio}</p>
                      <div className="count">
                        Count: {this.state.cnt}{" "}
                        sec
                      </div>
                    </section>
                  </div>
                )}
                <button type="button" className="btn" onClick={this.handleClick}>
                  Show Me
                </button>
              </div>
            
             
            </div>
          );
        }
      }
      export default App;