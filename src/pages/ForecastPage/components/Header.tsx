import { useCallback } from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import { Select } from "../../../components/Select/Select";
import { Location } from "../../../data/queries";
import { WeatherControl, weatherControls } from "../../../utils/utils";

interface ForecastPageHeaderprops {
    locations: Location[];
    setSelectedLocation(location: Location): void;
    selectedControls: WeatherControl[];
    setControls: React.Dispatch<React.SetStateAction<WeatherControl[]>>;
}

export default function ForecastPageHeader({ locations, selectedControls, setSelectedLocation, setControls }: ForecastPageHeaderprops) {

    const selectOptions = locations.map(location => ({
        value: location.id,
        label: location.name
    }))

    const onLocationSelect = (id: string) => {
        const location = locations.find(el => el.id === id)
        if (!location) {
            return
        }

        setSelectedLocation(location)
    }

    const handleControlChange = useCallback((checked: boolean, value: string) => {
        if (checked) {
            const selectedMetric = weatherControls.find(item => item.value === value) as WeatherControl;
            setControls(previousControls => [...previousControls, selectedMetric])
        } else {
            setControls(previousControls => previousControls.filter(control => control.value !== value))
        }
    }, [setControls]);

    const renderOptions = useCallback(() => {
        return (
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {weatherControls.map((item) => {
                    if (item.key !== '') {
                        return (
                            <Checkbox
                                key={item.value}
                                label={item.label}
                                value={item.value}
                                onChange={handleControlChange}
                                checked={selectedControls.some(control => control.value === item.value)}
                            />
                        )
                    }
                })}
            </div>
        )
    }, [handleControlChange, selectedControls]);

    return (
        <div className="w-4/5 flex gap-4 justify-between items-start">
            <Select options={selectOptions} onSelect={onLocationSelect} />
            {renderOptions()}
        </div>
    )
}
