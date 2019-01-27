import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Popup from './popup'

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.closeForm   = this.closeForm.bind(this);
      }

      componentDidMount(){
        fetch('/api/employees')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ employees: data }) });
      }

      handleClick() {
        this.setState({
            clicked: true
        })
      };

      closeForm(closeButton) {
        
        this.setState({
            clicked: closeButton
        })
        console.log(this.state)
      }

      
    render() {
        
        let employees = this.state.employees.map(e => {
            return <li>{e.first_name}  {e.last_name}</li>
        })

        return (
            
            <SideNav
                onSelect={(selected) => {
                    
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="add-shift" onClick={() => this.handleClick()}>
                    {this.state.clicked ? <Popup closeForm={this.closeForm}/> : null}
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            + Add Shift
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="add-employee">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} onSelect={("add-employee", event)} />
                        </NavIcon>
                        <NavText>
                            + Add Employee 
                        </NavText>
                        <NavItem eventKey="employee/subitem1">
                            <NavText>
                                Test Sub Item 1
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="employee/subitem2">
                            <NavText>
                                Test Sub Item 2
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem>
                        <NavIcon>

                        </NavIcon>
                        <NavText>
                            {employees}
                        </NavText>
                     </NavItem>
                    
                </SideNav.Nav>
            </SideNav>
        )
    }
}
