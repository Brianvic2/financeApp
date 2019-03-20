import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component{

    constructor(){
        super()
        this.state= {
                StockName:"",
                StockPrice:"",
                Volume:"",
                MarketCap:""

        }
        this.handleChange=this.handleChange.bind(this)
        this.Calculate=this.Calculate.bind(this)
        
    }
    handleChange(event){
        const{name, value}=event.target
        this.setState({
            [name]:value
        })
        this.Calculate()

    }

    Calculate(){
        this.setState({
            MarketCap:this.state.Volume*this.state.StockPrice
        })

    }

     


    
    render(){

        return(
    
            
            <main>
            <h1>Enter Company Details Below</h1>

            <form >
            <input 
            class="form-control form-control-lg"
            value= {this.state.StockName}  
            onChange ={this.handleChange}
            name ="StockName"
            placeholder="Stock" /><br />
            
            <input
            class="form-control form-control-sm" 
            value= {this.state.StockPrice} 
            onChange ={this.handleChange}
            name="StockPrice" 
            placeholder="KSH Stock Price" /><br />
           <input
           class="form-control form-control-sm"     
            value= {this.state.Volume} 
            onChange ={this.handleChange}
            name="Volume" 
            placeholder="Shares Outstanding (000) " />
            <br />
           
           <input
           class="form-control form-control-sm"     
            value= {this.state.MarketCap} 
            onChange ={this.handleChange}
            name="MarketCap" 
            placeholder="KSH Market Cap" />
            <br />

            
               
            
                
                
                

                </form>
                <br/>
                Company: <h1>{this.state.StockName}</h1>
                SharePrice: <p>Ksh{this.state.StockPrice}</p>
                Shares Outstanding(000) : <p>{this.state.Volume}</p>
                Market Cap: <p>Ksh{this.state.MarketCap}</p>
                

                
    
    
                </main>
        )
    }
    


}






export default App