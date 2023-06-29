import React from 'react';

const Beat = (props) => {
    return (
        <div className="metronome-beat">
            {
                props.seconds === 1 ? (<svg className="beat-circle" width="36" height="36" fill="brown"><circle cx="14" cy="14" r="14" /></svg>) :
                    (<svg className="beat-circle" width="36" height="36" fill="gainsboro"><circle cx="14" cy="14" r="14" /></svg>)
            }
            {
                props.seconds === 2 ? (<svg className="beat-circle" width="36" height="36" fill="darkcyan"><circle cx="14" cy="14" r="14" /></svg>) :
                    (<svg className="beat-circle" width="36" height="36" fill="gainsboro"><circle cx="14" cy="14" r="14" /></svg>)
            }
            {
                props.seconds === 3 ? (<svg className="beat-circle" width="36" height="36" fill="darkcyan"><circle cx="14" cy="14" r="14" /></svg>) :
                    (<svg className="beat-circle" width="36" height="36" fill="gainsboro"><circle cx="14" cy="14" r="14" /></svg>)
            }
            {
                props.seconds === 4 ? (<svg className="beat-circle" width="36" height="36" fill="darkcyan"><circle cx="14" cy="14" r="14" /></svg>) :
                    (<svg className="beat-circle" width="36" height="36" fill="gainsboro"><circle cx="14" cy="14" r="14" /></svg>)
            }
        </div>
    )
}

export default Beat;