import React from "react";

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
            
        }
        this.callApi = this.callApi.bind(this)
        this.callApi();
    }

    callApi(){
        fetch("https://dummy.restapiexample.com/api/v1/employees").then(
            (response)=>response.json()
        ).then((data)=>{
            console.log(data);
            this.setState({
                list:data.data
            })
        })
        }
        
    

    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}</td>


                    
                    
                </tr>
            )
        })
        return(
            <div className="container">
                <table className="table table-striped table-dark" >
                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>Salary</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>

            </div>
        )
    }

}
export default Table



