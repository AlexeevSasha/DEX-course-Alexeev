import React from "react";

export function Error() {
    return (
        <div className="error" >
            <h3 className="error__title">Ошибка: неправильная команта!</h3>
            <p className="error__text">Console принимает только cd и print</p>
        </div>
    );
}
