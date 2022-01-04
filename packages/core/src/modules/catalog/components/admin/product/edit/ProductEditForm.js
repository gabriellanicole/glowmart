import React from "react";
import Area from "../../../../../../lib/components/Area";
import Button from "../../../../../../lib/components/form/Button";
import { Form } from "../../../../../../lib/components/form/Form";
import { get } from "../../../../../../lib/util/get";
import { toast } from "react-toastify";

export default function ProductCreateForm(props) {
    return <Form
        {...props}
        submitBtn={false}
        onSuccess={(response) => {
            if (get(response, "success") === false) {
                toast.error(get(response, "message", "Something wrong. Please reload the page!"));
            }
        }}
        onError={() => {
            toast.error("Something wrong. Please reload the page!");
        }}
    >
        <div className="grid grid-cols-3 gap-x-2 grid-flow-row ">
            <div className="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                <Area id="leftSide" noOuter={true} />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
                <Area id="rightSide" noOuter={true} />
            </div>
        </div>
        <div className={"form-submit-button flex border-t border-divider mt-15 pt-15 justify-between"}>
            <Button
                title={"Cancel"}
                variant='critical'
                outline={true}
                onAction={
                    () => {
                        window.location = props.gridUrl;
                    }
                } />
            <Button
                title={"Save"}
                onAction={
                    () => { document.getElementById(props.id).dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })) }
                }
            />
        </div>
    </Form>;
}