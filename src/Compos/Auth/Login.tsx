import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginValidator } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { auth } from "@/services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/services/authC";

type Input = z.infer<typeof LoginValidator>;

function Login() {
  const navigate = useNavigate();
  const authCn = useAuth();

  const form = useForm<Input>({
    resolver: zodResolver(LoginValidator),
    defaultValues: {
      password: "",
      username: "",
    },
  });
  async function onSubmitHandler(data: Input) {
    try {
      await auth(data);
      //console.log(data);
      navigate("/couriers_de_depart", { replace: true });
      authCn?.login(data.username);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error");
      }
    }
  }
  return (
    <div className="w-[500px] m-auto mt-[80px]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Authentifier</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitHandler)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Utilisateur</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Entrer votre Nom D'Utilisateur"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de Pass</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Entrer votre Mot de Pass"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Authentifier</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
