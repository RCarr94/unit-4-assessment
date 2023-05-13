import './CircleSelector.css';

export default function CircleSelector({ idx, changeIdx }) {

    
    const classNames = Array(4).fill('');
    
    classNames.forEach(function(x, i) {
        if (i === idx) {
        classNames[i] = 'selected';
        } else {
        classNames[i] = '';
        }
    });
    
    return (
        <div className="CircleSelector">
        <button
            className={classNames[0]}
            onClick={() => {
            changeIdx(0);
            }}
        >
            SELECT CIRCLE 1
        </button>
        <button
            className={classNames[1]}
            onClick={() => {
            changeIdx(1);
            }}
        >
            SELECT CIRCLE 2
        </button>
        <button
            className={classNames[2]}
            onClick={() => {
            changeIdx(2);
            }}
        >
            SELECT CIRCLE 3
        </button>
        <button
            className={classNames[3]}
            onClick={() => {
            changeIdx(3);
            }}
        >
            SELECT CIRCLE 4
        </button>
        </div>
    );
}