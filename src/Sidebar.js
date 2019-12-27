import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                     <div class="card" style={{width: 18 +'rem'}}>
                      <div class="accordion" id="accordionExample">
                            <div class="card">
                              <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   Registration and Data Entry
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Reports
                                  </button>
                                </h2>
                              </div>
                          
                            
                            </div>

                           
                            <div class="card">
                              {/* <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Periods
                                  </button>
                                </h2>
                              </div> */}
                            
                  <div class="card-body">
                      <h5 class="card-title">Organisation Units</h5>
                      <p class="card-text"></p>
                      <a href="#" class="btn btn-primary"> <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h3.5V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                      <path fill-rule="evenodd" d="M9.5 10a.5.5 0 01.5-.5h4a.5.5 0 010 1h-3.5V14a.5.5 0 01-1 0v-4z" clip-rule="evenodd"></path>
                      </svg></a>
                             
                              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                  
                                  
                                </div>
                                
                               
                              </div>
                              
                            </div>
                            
                          </div>
                                


                    
                </div>
                

                  </div>

  
                
            </div>
        )
    }
}