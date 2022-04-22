import React from 'react';
import TimerForm from './timerform';
import Timer from './timer';
export default class editabletimer extends React.Component{
    state ={
        editFormOpen:false
    }

    handleEditPress=() => {
        this.openForm();
    }
    handleFormClose=() => {
        this.closeForm();
    }
    handleSubmit= timer => {
    const {onFormSubmit}= this.props;
    onFormSubmit(timer);
    this.closeForm();
    }
    closeForm =() => {
        this.setState({editFormOpen:false})
    }
    openForm= ()=> {
        this.setState({editFormOpen:true})
    }

    render() {
        const {id,title,project,elapsed,isRunning,onRemovePress,onStartPress}=this.state;
        const {editFormOpen} =this.state;
        
        if(editFormOpen){
            return (<TimerForm id={id} title={title} project={project} elapsed={elapsed} isRunning={isRunning}/>);
        }
        else{
            return (<Timer id={id} title={title} project={project} elapsed={elapsed} isRunning={isRunning} 
            onEditPress={this.handleEditPress} onRemovePress={onRemovePress} onStartPress={onStartPress}
            onStopPress={onStopPress}/>
            );
        }
    }
}