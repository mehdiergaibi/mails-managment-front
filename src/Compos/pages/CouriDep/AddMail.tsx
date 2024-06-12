import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddMailDepValidator } from "@/validators/addMailDepValidator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { getTypes as getT } from "@/services/api";
import { getDvisions as getD } from "@/services/api";
import { Toaster, toast } from "sonner";
import { addMailDep } from "@/services/api";
import { Type } from "@/Types/Type";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FaCheck } from "react-icons/fa";
import { Division } from "@/Types/Division";
type Input = z.infer<typeof AddMailDepValidator>;

function AddMail() {
  const [date, setDate] = useState<Date | undefined>();

  const [openAddToastSucc, setOpenAddtoastSucc] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [openClient, setOpenClient] = useState(false);

  const [types, setTypes] = useState<Type[]>([]);
  const [valueClient, setValueClient] = useState("");

  const [openDivision, setOpenDivision] = useState(false);

  const [division, setDivision] = useState<Division[]>([]);
  const [valueDivision, setValueDivision] = useState("");

  useEffect(() => {
    const getDivisions = async () => {
      try {
        const getAllDivisions: Division[] = await getD();
        setDivision(getAllDivisions);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unexpected error");
        }
      }
    };
    getDivisions();
  }, []);

  useEffect(() => {
    const getTypes = async () => {
      try {
        const getAllTypes: Type[] = await getT();
        setTypes(getAllTypes);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unexpected error");
        }
      }
    };
    getTypes();
  }, []);

  useEffect(() => {
    if (openAddToastSucc) {
      toast.success("Courier ajoute avec succes");
      setOpenAddtoastSucc(false);
    }
  }, [openAddToastSucc]);

  const form = useForm<Input>({
    resolver: zodResolver(AddMailDepValidator),
    defaultValues: {
      dateDepp: new Date("2005/06/08"),
    },
  });

  async function onSubmitHandler(data: Input) {
    try {
      setOpenAddtoastSucc(true);
      setShowForm(false);
      await addMailDep(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error");
      }
    }
  }

  return (
    <div>
      <Toaster richColors />
      <AlertDialog>
        <AlertDialogTrigger>
          <Button onClick={() => setShowForm(true)}>Add Mail</Button>
        </AlertDialogTrigger>
        {showForm ? (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Ajouter un Courier</AlertDialogTitle>
              <AlertDialogDescription>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmitHandler)}
                    className="space-y-2"
                  >
                    <FormField
                      control={form.control}
                      name="numero"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numero</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Entrer le numero"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateDepp"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col justify-between gap-2">
                            <FormLabel>Date de Depart</FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "col-span-3 justify-start text-left font-normal",
                                      !date &&
                                        "text-muted-foreground col-span-3 "
                                    )}
                                  >
                                    <SlCalender className="mr-2 h-4 w-4" />
                                    {date ? (
                                      format(date, "yyyy/MM/dd")
                                    ) : (
                                      <span>Choisir une date</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    className="w-[100%]"
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    {...field}
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destinataire"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destinataire</FormLabel>
                          <FormControl>
                            <Input
                              type="string"
                              placeholder="Entrer le destinataire"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="objet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Objet</FormLabel>
                          <FormControl>
                            <Input
                              type="string"
                              placeholder="Entrer l'objet"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={() => (
                        <FormItem>
                          <div className="flex flex-col justify-between gap-2">
                            <FormLabel>Type</FormLabel>
                            <Popover
                              open={openClient}
                              onOpenChange={setOpenClient}
                            >
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={openClient}
                                  className="col-span-3 justify-between"
                                >
                                  {valueClient
                                    ? types.find(
                                        (type) => `${type.type}` === valueClient
                                      )?.type
                                    : "Choisir un type"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandInput
                                    placeholder="Trouver Type"
                                    className="h-9"
                                  />
                                  <CommandEmpty>
                                    Pas de type trouve.
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {types.map((type) => (
                                      <CommandList key={type.type}>
                                        <CommandItem
                                          key={type.type}
                                          value={type.type}
                                          onSelect={(currentValue) => {
                                            setValueClient(
                                              currentValue === valueClient
                                                ? ""
                                                : currentValue
                                            );
                                            form.setValue("type", currentValue);
                                            setOpenClient(false);
                                          }}
                                        >
                                          {type.type}
                                          <FaCheck
                                            className={`ml-auto h-4 w-4 ${
                                              valueClient === `${type.type}`
                                                ? "opacity-100"
                                                : "opacity-0"
                                            }`}
                                          />
                                        </CommandItem>
                                      </CommandList>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="division"
                      render={() => (
                        <FormItem>
                          <div className="flex flex-col justify-between gap-2">
                            <FormLabel>Division</FormLabel>
                            <Popover
                              open={openDivision}
                              onOpenChange={setOpenDivision}
                            >
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={openDivision}
                                  className="col-span-3 justify-between"
                                >
                                  {valueDivision
                                    ? division.find(
                                        (division) =>
                                          `${division.name}` === valueDivision
                                      )?.name
                                    : "Choisir une Division"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandInput
                                    placeholder="Trouver Division"
                                    className="h-9"
                                  />
                                  <CommandEmpty>
                                    Pas de division trouve.
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {division.map((division) => (
                                      <CommandList key={division.name}>
                                        <CommandItem
                                          key={division.name}
                                          value={division.name}
                                          onSelect={(currentValue) => {
                                            setValueDivision(
                                              currentValue === valueDivision
                                                ? ""
                                                : currentValue
                                            );
                                            form.setValue(
                                              "division",
                                              currentValue
                                            );
                                            setOpenDivision(false);
                                          }}
                                        >
                                          {division.name}
                                          <FaCheck
                                            className={`ml-auto h-4 w-4 ${
                                              valueDivision ===
                                              `${division.name}`
                                                ? "opacity-100"
                                                : "opacity-0"
                                            }`}
                                          />
                                        </CommandItem>
                                      </CommandList>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="observation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Observation</FormLabel>
                          <FormControl>
                            <Input
                              type="string"
                              placeholder="Entrer l'observation"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="recuPar"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recu par</FormLabel>
                          <FormControl>
                            <Input
                              type="string"
                              placeholder="Entrer le recu par "
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <Button type="submit" className="mr-1">
                        Ajouter
                      </Button>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                    </div>
                  </form>
                </Form>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        ) : (
          <div></div>
        )}
      </AlertDialog>
    </div>
  );
}

export default AddMail;
