import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TimezoneSelectProps = {
  timezones: string[];
  value: string;
  onChange: (value: string) => void;
};

const TimezoneSelect: React.FC<TimezoneSelectProps> = ({
  timezones,
  value,
  onChange,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px] py-4 border-[#c8c4b6] shadow-none">
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectContent>
        {timezones
          .slice() // copy so original isn't mutated
          .sort((a, b) => a.localeCompare(b))
          .map((tz) => (
            <SelectItem key={tz} value={tz}>
              {tz
                .replace("America/", "")
                .replace("Australia/", "")
                .replaceAll("_", " ")}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default TimezoneSelect;
