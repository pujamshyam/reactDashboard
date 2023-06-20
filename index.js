

function App (){
    return (
        <div className="container">
            <Navbar />
            <Second />
            <Third />
            <section>
            
            <div className="one">
            <Card
            name="WebDesigining"
            desc="Prototyping" />
            </div>
            <div className="two">
            <Card 
            name="Testing"
            desc="Prototyping"
            />
            </div>
            <div className="three">
            <Card 
            name="Animations"
            desc="Prototyping"
            />
            </div>
            <div className="four">

            <Card 
            name="UIDevelopment"
            desc="Prototyping"/>
            </div>
            <div className="five">
            <Card 
            name="DataAnalysis"
            desc="Prototyping"/>
            </div>
            <div className="six">
            <Card 
            name="WebDeveloping"
            desc="Prototyping"/>
            </div>
           
            
            
            </section>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

function Navbar(){
    return (
       <nav>
           
            <h3>Projects</h3>
        
            <h3 className="navleft">December,12</h3>
            </nav>
    )
}

function Second(){
    return (
        <div className="sec">
            <div>
            <h3>45 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 24 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 62</h3>
            </div>
            
        </div>
    )
}
function Third(){
    return (
        <div className="thi">
            <div className="ic1">
            <p>⨀ In Proggress &emsp;&emsp;&emsp;&emsp; ⨀ Upcoming &emsp;&emsp;&emsp;&emsp; ⨀ Total Projects</p>
            </div>
            <div className="ic2">
            <i class="fa fa-list-ul" aria-hidden="true"></i>&emsp;
            <i class="fa fa-th-large" aria-hidden="true"></i>
            </div>
        </div>
    )
}

function Card(props){
    return(
        
        <section className="mn"> 
        
        
       <table className="gg">
        <tr>
            <td><h5>20,june 2023 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i className="ca" class="fa fa-ellipsis-v" aria-hidden="true"></i> </h5></td>
        </tr>
        <tr>
            <td>
            <center className="cen">
                <h5>{props.name}</h5>
                <p>{props.desc}</p>
         </center>
            </td>
        </tr>
        <tr>
            <td>
                <h5>Proggress</h5>
                <div className="con">
                    <div className="prg">20%</div>
                </div>
                <h5> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80%</h5>
               
            </td>
        </tr>
        <tr>
            <td>..........................................................................................................</td>
        </tr>
        
       </table>
    
        
         
        </section>
        
        
    )
}