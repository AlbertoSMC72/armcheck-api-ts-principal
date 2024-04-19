import { db } from "../../../shared/application/mysqlConnection";
import { Consulta } from "../../domian/entities/querie";
import { ConsultaRepository } from "../../domian/repository/querieRepository";

export class MySQlRepositoryConsulta implements ConsultaRepository{
    postConsulta(consulta: Consulta): Promise<Consulta> {
        // Obtener la fecha actual
        const fecha_consulta = new Date();

        const { id_unico,id_dispositivo,id_paciente} = consulta;
        const query = `insert into consultas (id_unico,id_dispositivo,id_paciente,fecha_consulta) values (?,?,?,?)`;
        return db
        .execute(query, [id_unico,id_dispositivo,id_paciente,fecha_consulta ])
        .then(() => {
          return consulta;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }

    getConsultaById(id_unico: string): Promise<Consulta> {
      const query = "SELECT * FROM analisis where id_unico = ?";
      return db
        .execute(query, [id_unico])
        .then((res: any) => {
          console.log(res);
          return res[0][0] as Consulta;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }
}

