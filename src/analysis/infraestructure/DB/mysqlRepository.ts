import { db } from "../../../shared/application/mysqlConnection";
import { Analisis } from "../../domain/entities/analysis";
import { AnalisisRepository } from "../../domain/repository/analysisRepository";

export class MySQlRepositoryAnalisis implements AnalisisRepository{
    getAnalisis(): Promise<Analisis> {
        const query = "SELECT * FROM analisis"
        return db.execute(query).then((res: any) => {
            return res[0] as Analisis;
          });
    
    }
    getAnalisisById(id_unico: string): Promise<Analisis> {
        const query = "SELECT * FROM analisis where id_unico = ?";
      return db
        .execute(query, [id_unico])
        .then((res: any) => {
          console.log(res);
          return res[0][0] as Analisis;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }
}
