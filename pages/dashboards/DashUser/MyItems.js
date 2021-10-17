import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const MyItems = () => {
    return (
        <div class="headerstyle1">
            <div class="cover-image bg-background3" data-image-src="/assets/images/banners/banner4.jpg">
                <DashHeader pageName="My Items" />
            </div>


            {/* <!--User Dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-12 col-md-12">

                            {/* user menu side */}
                            <UserMenu />
                            {/* user menu side */}

                            <div class="card my-select">
                                <div class="card-header">
                                    <h3 class="card-title">Search Categories</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="text" placeholder="What are you looking for?" />
                                    </div>
                                    <div class="form-group">
                                        <select name="country" id="select-countries" class="form-control custom-select select2-show-search">
                                            <option value="1" selected="">All Categories</option>
                                            <option value="2">HTML</option>
                                            <option value="3">Wordpress</option>
                                            <option value="4">Angular</option>
                                            <option value="5">PHP</option>
                                            <option value="7">PSD</option>
                                            <option value="8">Plugins</option>
                                        </select>
                                    </div>
                                    <div class="">
                                        <a href="#" class="btn ripple btn-block btn-primary">Search</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Safety Tips For Buyers</h3>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec  mb-0">
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place
                                        </li>
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy
                                        </li>
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item
                                        </li>
                                        <li class="ml-5 mb-0">
                                            <a href="tips.html"> View more..</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-12 col-md-12">
                            <div class="card ads-tabs">
                                <div class="card-body">
                                    <div class="d-flex tabs-menus mb-0 item2-gl-nav bg-white p-0 border-0">
                                        <ul class="nav panel-tabs mt-1">
                                            <li class=""><a href="#tab1" class="active" data-toggle="tab">Portfolio</a></li>
                                            <li><a href="#tab2" data-toggle="tab">Upload Items</a></li>
                                            <li><a href="#tab3" data-toggle="tab">Followers</a></li>
                                        </ul>
                                        <div class="ml-auto">
                                            <div class="d-flex select2-sm">
                                                <label class="mr-2 mt-1 mb-sm-1">Sort By:</label>
                                                <select name="item" class="form-control select-sm w-70 select2">
                                                    <option value="1">Latest</option>
                                                    <option value="2">Oldest</option>
                                                    <option value="3">Fees:Low-to-High</option>
                                                    <option value="5">Fees:Hight-to-Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="tab-content">
                                    <div class="tab-pane active table-responsive userprof-tab manged-ad" id="tab1">
                                        <div class="row border-bottom ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Name & Details</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Price</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Status</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Action</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/01.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Admin</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$24</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/02.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Wordpress Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Oct-23-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Listing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$56</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-danger">hidden</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/03.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Angular Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-15-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Beauty</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$22</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-warning">Disabled</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/04.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PHP Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-25-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$18</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/05.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PSD Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Medical</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$25</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/06.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Dec-15-2018</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$22</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-danger">hidden</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/07.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Andora & Admin WebApp Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-22-2017</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>HTML</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$14</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-warning">Disabled</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/08.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Wordpress Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-30-2018</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Corporate</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$18</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/09.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PSD Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Dec-03-2018</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Ecommerce</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$35</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/10.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Angular Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-15-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Spa</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$22</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-danger">hidden</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/11.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PHP Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-03-2017</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Classified</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$35</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-warning">Disabled</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/12.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-20-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Corporate</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$12</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane table-responsive userprof-tab manged-ad" id="tab2">
                                        <div class="row border-bottom ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Name & Details</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Price</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Status</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="card-title">Action</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/02.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Wordpress Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Oct-23-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Listing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$56</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-danger">hidden</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/04.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PHP Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-25-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$18</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/03.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">Angular Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-15-2019</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Beauty</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$22</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-warning">Disabled</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row ml-0 mr-0 border-top">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/01.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Admin</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$24</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/05.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">PSD Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Medical</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$25</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-primary">Published</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row border-top ml-0 mr-0">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <label class="custom-control custom-checkbox mr-3">
                                                            <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                        <div class="media mt-0 mb-0">
                                                            <div class="card-aside-img">
                                                                <a href="#"></a>
                                                                <img src="/assets/images/media/pictures/small/06.jpg" alt="img" class="br-4" />
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="card-item-desc ml-4 p-0">
                                                                    <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                                    <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Dec-15-2018</div>
                                                                    <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <h3 class="fs-20">$22</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <a href="#" class="badge badge-danger">hidden</a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-6">
                                                <div class="card-body">
                                                    <div class="btn-list">
                                                        <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                        <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane table-responsive userprof-tab" id="tab3">
                                        <div class="card shadow-none mb-0 border-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="media mt-0">
                                                            <div class="card-aside-img">
                                                                <img src="/assets/images/png/1.png" alt="img" class="bg-light" />
                                                            </div>
                                                            <div class="media-body ml-3">
                                                                <div class="ml-3 mt-1">
                                                                    <h4 class="mt-0">Marco Theme</h4>
                                                                    <div class="author-user">
                                                                        <img src="/assets/images/png/01.png" alt="img" />
                                                                        <img src="/assets/images/png/02.png" alt="img" />
                                                                        <img src="/assets/images/png/03.png" alt="img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mt-1">
                                                            <span class="d-flex">
                                                                <small>Items:</small>
                                                                <small class="font-weight-semibold1 ml-2">14</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Followers:</small>
                                                                <small class="font-weight-semibold1 ml-2">46</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Member Since:</small>
                                                                <small class="font-weight-semibold1 ml-2">May 2017</small>
                                                            </span>
                                                            <small>Available for freelance work</small>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="text-lg-center mt-3 mt-lg-0">
                                                            <h4 class=" text-dark fs-25 mb-1">124</h4>
                                                            <span class="text-muted fs-13">Sales</span>
                                                            <div class="mt-2">
                                                                <div class="rating-stars block">
                                                                    <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3" />
                                                                    <div class="rating-stars-container mr-2">
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card shadow-none mb-0 border-top border-left-0 border-right-0 border-bottom-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="media mt-0">
                                                            <div class="card-aside-img">
                                                                <img src="/assets/images/png/2.png" alt="img" class="bg-light" />
                                                            </div>
                                                            <div class="media-body ml-3">
                                                                <div class="ml-3 mt-1">
                                                                    <h4 class="mt-0">Lisa Theme</h4>
                                                                    <div class="author-user">
                                                                        <img src="/assets/images/png/01.png" alt="img" />
                                                                        <img src="/assets/images/png/02.png" alt="img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mt-3">
                                                            <span class="d-flex">
                                                                <small>Items:</small>
                                                                <small class="font-weight-semibold1 ml-2">54</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Followers:</small>
                                                                <small class="font-weight-semibold1 ml-2">78</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Member Since:</small>
                                                                <small class="font-weight-semibold1 ml-2">May 2018</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="text-lg-center mt-3 mt-lg-0r">
                                                            <h4 class=" text-dark fs-25 mb-1">786</h4>
                                                            <span class="text-muted fs-13">Sales</span>
                                                            <div class="mt-2">
                                                                <div class="rating-stars block">
                                                                    <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                    <div class="rating-stars-container mr-2">
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card shadow-none mb-0 border-top border-left-0 border-right-0 border-bottom-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="media mt-0">
                                                            <div class="card-aside-img">
                                                                <img src="/assets/images/png/3.png" alt="img" class="bg-light" />
                                                            </div>
                                                            <div class="media-body ml-3">
                                                                <div class="ml-3 mt-1">
                                                                    <h4 class="mt-0">Marshall Theme</h4>
                                                                    <div class="author-user">
                                                                        <img src="/assets/images/png/01.png" alt="img" />
                                                                        <img src="/assets/images/png/03.png" alt="img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mt-3">
                                                            <span class="d-flex">
                                                                <small>Items:</small>
                                                                <small class="font-weight-semibold1 ml-2">5</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Followers:</small>
                                                                <small class="font-weight-semibold1 ml-2">6</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Member Since:</small>
                                                                <small class="font-weight-semibold1 ml-2">May 2019</small>
                                                            </span>
                                                            <small>Available for freelance work</small>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="text-lg-center mt-3 mt-lg-0">
                                                            <h4 class=" text-dark fs-25 mb-1">56</h4>
                                                            <span class="text-muted fs-13">Sales</span>
                                                            <div class="mt-2">
                                                                <div class="rating-stars block">
                                                                    <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="2" />
                                                                    <div class="rating-stars-container mr-2">
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card shadow-none mb-0 border-top border-left-0 border-right-0 border-bottom-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="media mt-0">
                                                            <div class="card-aside-img">
                                                                <img src="/assets/images/png/4.png" alt="img" class="bg-light" />
                                                            </div>
                                                            <div class="media-body ml-3">
                                                                <div class="ml-3 mt-1">
                                                                    <h4 class="mt-0">Chapman Theme</h4>
                                                                    <div class="author-user">
                                                                        <img src="/assets/images/png/01.png" alt="img" />
                                                                        <img src="/assets/images/png/02.png" alt="img" />
                                                                        <img src="/assets/images/png/03.png" alt="img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mt-3">
                                                            <span class="d-flex">
                                                                <small>Items:</small>
                                                                <small class="font-weight-semibold1 ml-2">37</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Followers:</small>
                                                                <small class="font-weight-semibold1 ml-2">67</small>
                                                            </span>
                                                            <span class="d-flex">
                                                                <small>Member Since:</small>
                                                                <small class="font-weight-semibold1 ml-2">Jan 2017</small>
                                                            </span>
                                                            <small>Available for freelance work</small>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="text-lg-center mt-3 mt-lg-0">
                                                            <h4 class=" text-dark fs-25 mb-1">345</h4>
                                                            <span class="text-muted fs-13">Sales</span>
                                                            <div class="mt-2">
                                                                <div class="rating-stars block">
                                                                    <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                    <div class="rating-stars-container mr-2">
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm ">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                        <div class="rating-star sm">
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pagination justify-content-end">
                                <li class="page-item page-prev disabled">
                                    <a class="page-link" href="#" tabindex="-1">Prev</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item page-next">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--User Dashboard--> */}


            {/* Subscribe Online Letter */}

            <SubscribeOnlineLetters/>

            {/* Subscribe Online Letter */}
        </div>
    );
};

export default MyItems;