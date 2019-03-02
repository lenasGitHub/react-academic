import React from 'react';
const Curriculum = ( props ) => {
        return (
          <div class="curriculum">
             <a class="curriculum--container">
              <div class="section-header--left">
                <span class="section-title--wrapper">
                <span class="section-header--lesson">{props.lesson}</span>
                  <span class="section-title--text"><i class="fa fa-file-text-o" aria-hidden="true"></i>
{props.title}</span>
                </span>
              </div>
              <div class="section-header--right">
                <span class="section-header--length"><i class="fa fa-clock-o" aria-hidden="true"></i>
 {props.length}</span>
              </div>
            </a>
          </div>
)
};
export default Curriculum;
