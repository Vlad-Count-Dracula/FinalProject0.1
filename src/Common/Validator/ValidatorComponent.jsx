
import React from "react";
import s from './ValidatorComponent.module.css';

const Element = Element => ({ input, meta, ...props }) => {
    let isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <Element
                    {...input}
                    {...props}
                    className={isError ? s.error : s.mormal}
                />
            </div>
            <div>
                {isError ? <h3 className={s.errorText}>{meta.error}</h3> : ''}
            </div>
        </div>
    )
};

export const TextArea = Element('textarea');
export const Input = Element('input');


