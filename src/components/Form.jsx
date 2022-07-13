import React, {useState, Component} from 'react'
import './Form.scss'

class Form extends Component {
    
    // class NameForm extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {value: ''};
      
    //       this.handleChange = this.handleChange.bind(this);
    //       this.handleSubmit = this.handleSubmit.bind(this);
    //     }
    //     handleChange(event) {
    //         this.setState({value: event.target.value.toUpperCase()});
    //       }
      
    //     handleChange(event) {
    //       this.setState({value: event.target.value});
    //     }
      
    //     handleSubmit(event) {
    //       alert('Отправленное имя: ' + this.state.value);
    //       event.preventDefault();
    //     }
    // }      
    

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [file, setFile] = useState('')


    //     function handleClick(){
    //         let newContact = {
    //             name,
    //             email,
    //             file 
    //         }
    //         alert(newContact );
    //     }

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email:''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event){
        event.preventDefault();
        console.log('form issubmited', this.state.name);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('form issubmited', this.state.email);
    }
    handleNameChange(event){
        console.log('name was changed', event.target.value  );
        this.setState({name: event.target.value })
    }
    handleEmailChange(event){
        console.log('email was changed', event.target.value  );
        this.setState({email: event.target.value })
    }

render(){
    return (
        <>
        <main className='sec_form'>
            <div className="form-f">
                <div>
                <strong>Подать заявку</strong>
            </div>
           
            <div className="add-inputs">
                <form action="" onSubmit={this.handleSubmit} >
                <input  
                className='input_form' 
                type="Text" 
                placeholder='Name' 
                value={this.state.name}
                onChange={this.handleNameChange}
                />
                <input
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className='input_form' 
                  type="email" 
                  placeholder='email' />
                {/* <label  class="custom-file-upload">
                <input  type="file"/>
                    Загрузите ваш резюме
                </label> */}
                <button className='contact_buuton' >Get</button>
                </form>
            </div>
            </div>
             
        </main>
        </>
       
    )
}
}


export default Form;