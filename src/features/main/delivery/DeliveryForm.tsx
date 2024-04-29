import Input from "../../../shared/Input";
import {IDeliveryFormProps} from "../../../entities/types";

function DeliveryForm({form}:IDeliveryFormProps) {
    const {
        register,
        formState: {errors},
    } = form
    return (
        <form className="p-4 flex flex-col items-center justify-center ">
            <Input
                errors={errors}
                label="Выберите дату"
                type="date"
                validation={{required: true}}
                id="date"
                register={register}
            />
            <Input
                errors={errors}
                label="Выберите время"
                type="time"
                validation={{required: true}}
                id="time"
                register={register}
            />
            <Input
                errors={errors}
                label="Куда доставить?"
                type="text"
                validation={{required: true}}
                id="address"
                register={register}
            />
            <Input
                errors={errors}
                label="Имя"
                type="text"
                validation={{required: true}}
                id="name"
                register={register}
            />
            <Input
                errors={errors}
                label="Телефон"
                type="text"
                validation={{required: true}}
                id="name"
                register={register}
            />
        </form>
    )

}

export default DeliveryForm