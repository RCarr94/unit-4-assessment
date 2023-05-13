
import './Circles.css';

export default function Circles({ idx }) {
    
    const classNames = Array(4).fill('');
    
    classNames.forEach(function(_, i) {
        if (i === idx) {
        classNames[i] = 'selected';
        } else {
        classNames[i] = '';
        }
    });
    
    return (
        <div className="Circles">
        <div className={classNames[0]}>1</div>
        <div className={classNames[1]}>2</div>
        <div className={classNames[2]}>3</div>
        <div className={classNames[3]}>4</div>
        </div>
    );
}