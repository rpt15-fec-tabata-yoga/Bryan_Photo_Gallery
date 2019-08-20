const Arrows = ({ direction, clickFunc, display }) => {
  <div className={ `slide-arrow ${direction}`} onClick={ clickFunc }>
    { display }
  </div>
};

export default Arrows;