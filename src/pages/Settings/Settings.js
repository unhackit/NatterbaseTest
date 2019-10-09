import React from 'react';

import './Settings.css';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class Settings extends React.Component {
    constructor(){
        super()

        this.state = {
            Email: 'amarachukwu@gmail.com',
            FullName: 'Olatunji Joseph',
            UserName: 'Madijozi',
            BirthDate:'07/15/1990',
            CurrentPassword: '',
            NewPassword: '',
            ConfirmPassword: '',
            CurrentState:'',
            NewState: '',
            LGA: '',
            FederalConstituency:'',
            SenatorialDistrict: '',
            StateConstituency:''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render(){
        const { Email, FullName, UserName, BirthDate, CurrentPassword, NewPassword, ConfirmPassword, CurrentState, NewState, LGA, FederalConstituency, SenatorialDistrict, StateConstituency } = this.state
        return (
            <div className='main-settings'>
                <div className='fluid'>
                    <div className='row'>
                        <h1 className='settings-heading mt-5 mb-4'>ACCOUNT SETTINGS</h1>
                    </div>
                    <div className="row">
                        <div className="personal-information-box p-4 mt-2 mb-5">
                            <div className="d-flex">
                                <img className="personal-information-img" alt="" src={require('../../Assets/Img/vector-bg.png')}/>
                                <h2 className='personal-information-heading ml-3'>PERSONAL INFORMATION</h2>
                            </div>
                            <p className="note mt-3">Use this page to update your contact information and change your password</p>
                            <form onSubmit = {this.handleSubmit}>
                                <div className='row pt-3'>
                                    <div className='col-sm-12 col-md-2 col-lg-1 mr-5'>
                                        <div>
                                            <img alt="profile" src={require("../../Assets/Img/Avatar.png")}/>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-5'>
                                        <div className='pic-upload-section'>
                                            <a className="pic-upload" href="/settings">Upload a new profile image</a>
                                            <p className='pt-2 max-size-info'>Maximum size allowed is 600kb of PNG, JPEG, JPG</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form onSubmit = {this.handleSubmit}>
                                <div className='row mt-4'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={Email}
                                            type='email'
                                            label='EMAIL ADDRESS'
                                            name='Email'
                                            disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={FullName}
                                            type='text'
                                            label='FULL NAME'
                                            name='FullName'
                                            status='enabled'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={UserName}
                                            type='text'
                                            label='USER NAME'
                                            name='UserName'
                                            status='enabled'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={BirthDate}
                                            type='date'
                                            label='BIRTH DATE'
                                            disabled
                                            name='BirthDate'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className="col-sm-12 col-md-3 col-lg-2">
                                        <Button formType='settings' type='submit'>Save Changes</Button>
                                    </div>
                                </div>
                            </form>
                                <div className='line-through mt-3 mb-3'></div>
                            <form onSubmit = {this.handleSubmit}>
                                <div className='row mt-3'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={CurrentPassword}
                                            type='password'
                                            label='CURRENT PASSWORD'
                                            name='CurrentPassword'
                                            status='enabled'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={NewPassword}
                                            type='password'
                                            label='NEW PASSWORD'
                                            name='NewPassword'
                                            status='enabled'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={ConfirmPassword}
                                            type='password'
                                            label='CONFIRM PASSWORD'
                                            status='enabled'
                                            name='ConfirmPassword'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className="col-sm-12 col-md-3 col-lg-2">
                                        <Button formType='settings' type='submit'>Save Changes</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="personal-information-box p-4 mt-2 mb-5">
                            <div className="d-flex">
                                <img className="personal-information-img" alt="" src={require('../../Assets/Img/vector-bg.png')}/>
                                <h2 className='personal-information-heading ml-3'>CHANGE STATE OF RESIDENCE</h2>
                            </div>
                            <p className="note mt-3">Update your residential address and save changes below</p>
                            <form onSubmit = {this.handleSubmit}>
                                <div className='row mt-4'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={CurrentState}
                                            type='text'
                                            label='CURRENT STATE'
                                            disabled
                                            width='partial'
                                            name='CurrentState'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={NewState}
                                            type='text'
                                            label='NEW STATE OF RESIDENCE'
                                            status='enabled'
                                            name='NewState'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={LGA}
                                            type='text'
                                            label='WHAT L.G.A DO YOU LIVE IN'
                                            status='enabled'
                                            name='LGA'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={FederalConstituency}
                                            type='text'
                                            label='FEDERAL CONSTITUENCIES'
                                            status='enabled'
                                            name='FederalConstituency'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={SenatorialDistrict}
                                            type='password'
                                            label='SENATORIAL DISTRICT'
                                            status='enabled'
                                            name='SenatorialDistrict'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-3'>
                                        <div>
                                            <Input
                                            value={StateConstituency}
                                            type='password'
                                            label='STATE CONSTITUENCIES'
                                            status='enabled'
                                            name='StateConstituency'
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className="col-sm-12 col-md-3 col-lg-2">
                                        <Button formType='settings' type='submit'>Save Changes</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;