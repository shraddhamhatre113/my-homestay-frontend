import { useEffect, useState } from "react";
import $ from "jquery";

import './pricerange.css'
const PriceRange = (props) => {
    const [price, setPrice] = useState({
        max:props.maxPrice || 10,
        min:props.minPrice || 0
    });

    useEffect(() => {
        $( '.input-range').each(function(){
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if( separator !== -1 ){
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[ i ] = parseFloat( item );
                });
            } else {
                value = parseFloat( value );
            }
            $( this ).slider({
                formatter: function(value) {
                    return '$' + value;
                },
                min: parseFloat( $( this ).attr('data-slider-min') ),
                max: parseFloat( $( this ).attr('data-slider-max') ), 
                range: $( this ).attr('data-slider-range'),
                value: value,
                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                tooltip: $( this ).attr('data-slider-tooltip')
            }).on('change',function(slideEvent){
                props.onChange(slideEvent.value.newValue)
            });
        });
      }, []);
      useEffect(() => {
        $( '.input-range').each(function(){
            var value = props.minPrice + "," + props.maxPrice
            var separator = value.indexOf(',');
            if( separator !== -1 ){
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[ i ] = parseFloat( item );
                });
            } else {
                value = parseFloat( value );
            }
            $( this ).slider({
                formatter: function(value) {
                    return '$' + value;
                },
                min: parseFloat(  props.minPrice ),
                max: parseFloat( props.maxPrice ), 
                range: $( this ).attr('data-slider-range'),
                value: value,
                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                tooltip: $( this ).attr('data-slider-tooltip')
            });
        });
        
      },[props.maxPrice]);

  return (
    <div  className="d-flex flex-row my-4">
       <div className="col-0">€{props.minPrice}</div> 
      <div class="slider-wrapper slider-warning slider-strips slider-ghost col-9">
        <input
          class="input-range"
          type="text"
          data-slider-step="1"
          data-slider-value={price.min + "," + price.max}
          data-slider-min={price.min}
          data-slider-max={price.max}
          data-slider-range="true"
          data-slider-tooltip_split="true"
          onChange={props.onChange}
        />
      </div>
      <div className="col-0">€{props.maxPrice}</div>
      
    </div>
  );
};
export default PriceRange;