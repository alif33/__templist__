import React from 'react';
import AdminMenu from '../../../components/dashboards/dashSharedComponents/AdminMenu';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const EditProfile = () => {
    return (
        <div>
            <DashHeader pageName="My Dashboard" />
            {/* <!--admin Dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">

                            {/* amin menu  */}
                            <AdminMenu />
                            {/* amin menu  */}

                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">Edit Profile</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">First Name</label>
                                                <input type="text" class="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Last Name</label>
                                                <input type="text" class="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Email address</label>
                                                <input type="email" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Phone Number</label>
                                                <input type="number" class="form-control" placeholder="Number" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Address</label>
                                                <input type="text" class="form-control" placeholder="Home Address" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="form-group">
                                                <label class="form-label">City</label>
                                                <input type="text" class="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <label class="form-label">Postal Code</label>
                                                <input type="number" class="form-control" placeholder="ZIP Code" />
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label class="form-label">Country</label>
                                                <select class="form-control select2-show-search border-bottom-0 w-100 select2-show-search" data-placeholder="Select">
                                                    <optgroup label="Categories">
                                                        <option>--Select--</option>
                                                        <option value="1">Germany</option>
                                                        <option value="2">Real Estate</option>
                                                        <option value="3">Canada</option>
                                                        <option value="4">Usa</option>
                                                        <option value="5">Afghanistan</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">China</option>
                                                        <option value="8">Denmark</option>
                                                        <option value="9">Finland</option>
                                                        <option value="10">India</option>
                                                        <option value="11">Kiribati</option>
                                                        <option value="12">Kuwait</option>
                                                        <option value="13">Mexico</option>
                                                        <option value="14">Pakistan</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Facebook</label>
                                                <input type="text" class="form-control" placeholder="https://www.facebook.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Google</label>
                                                <input type="text" class="form-control" placeholder="https://www.google.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Twitter</label>
                                                <input type="text" class="form-control" placeholder="https://twitter.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Pinterest</label>
                                                <input type="text" class="form-control" placeholder="https://in.pinterest.com/" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">About Me</label>
                                                <textarea rows="5" class="form-control" placeholder="Enter About your description"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <label class="form-label">Upload Image</label>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" name="example-file-input-custom" />
                                                    <label class="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn ripple  btn-secondary">Updated Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Admin Dashboard--> */}

            {/* <!-- Onlinesletter--> */}

            <SubscribeOnlineLetters />

            {/* <!-- Onlinesletter--> */}
        </div>
    );
};

export default EditProfile;