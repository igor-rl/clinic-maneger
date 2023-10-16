import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PlanoModel } from "../entities/plano.model";
import { InjectModel } from "@nestjs/sequelize";
import { Repository } from "sequelize-typescript";
import { SetStatusValidadePlanoDto } from "../dto/set-status-validade-plano.dto";

@Injectable()
export class SetStatusValidadeUseCase {
  constructor(
    @InjectModel(PlanoModel)
    private readonly planoRepo: Repository<PlanoModel>
  ) { }

  async execute(id: string, dto: SetStatusValidadePlanoDto): Promise<any> {
    let validade: Date | null;
    if ('validade' in dto) {
      validade = dto.validade;
    } else {
      const plano = await this.planoRepo.findOne({ where: { id: id } });
      if (plano && plano.validade) {
        validade = plano.validade;
      }
    }
    if (validade) {
      const now = new Date();
      const oneHourFromNow = new Date(now.getTime() + 1 * 60 * 60 * 1000); // agora + 1 hora

      if (validade <= oneHourFromNow) {
        throw new HttpException(`A data de validade precisa ser nula ou maior que 1h do horário atual. Validade: ${validade}`, HttpStatus.FORBIDDEN);
      }
    }
    await this.planoRepo.update(dto, { where: { id: id } });
    return this.planoRepo.findOne({ where: { id: id } });
  }
}
