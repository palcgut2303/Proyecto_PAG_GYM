/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pt=$.ig.locale.pt||{};$.ig.locale.pt.schedulerCore=$.ig.locale.pt.schedulerCore||{};var l=$.ig.locale.pt.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="O valor da propriedade {0} não pode ser modificado nesta instância {1} porque é membro de uma recorrência.";l["LE_ActivityBase_DisassociatedResource"]="O recurso especificado não está associado à mesma fonte de dados que esta atividade.";l["LE_AppointmentItemsSource_CannotEdit"]="A origem do item de compromisso não suporta a modificação do seu conteúdo.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="O valor especificado deve ser uma matriz JSON ou uma instância $.ig.DataSource.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="A OrigemDosItensDeCompromisso não suporta a modificação do seu conteúdo. A origem do item deve implementar System.Collections.IList para suportar modificações.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="A propriedade RaizDePeriodicidade não é vinculável e não pode ser mapeada. Crie um mapeamento para a propriedade IdDePeriodicidade.";l["LE_AppointmentPropertyMapping_Resource"]="A propriedade Recurso não é vinculável e não pode ser mapeada. Crie um mapeamento para a propriedade IdDeRecursos.";l["LE_BeginEdit_CreatePending"]="A atividade especificada não pode ser editada porque existe uma operação 'Criar' pendente.";l["LE_CannotCreateDataObject_DOTNET"]="Não foi possível criar uma nova instância do objeto de dados. Verifique se o seu tipo de objeto de dados tem um construtor sem parâmetros. Caso contrário, atribua um delegado à propriedade CriarChamadaDeRetornoDoObjetoDeDadosDeCompromisso que cria novas instâncias deste tipo.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="A operação não é válida enquanto a OrigemDeDatos estiver em uso. Aceda e modifique elementos com o Programador.OrigemDeDados.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="A coleção de compromissos deve estar vazia antes de usar a OrigemDeDados.";l["LE_CouldNotConvertColorScheme"]="O valor '{0}' não pôde ser convertido para um valor AgendarEsquemaDeCoresDeRecurso.";l["LE_CouldNotConvertValue"]="O valor '{0}' não pôde ser convertido para o tipo {1}.";l["LE_CreateDataObjectFailed"]="Não foi possível criar uma nova instância do objeto de dados.";l["LE_DataObjectNotAssociated"]="O objeto de dados especificado não está associado a um Compromisso.";l["LE_DuplicateIdentifier"]="O identificador '{0}' já está em uso. Os identificadores de atividade/recurso devem ser únicos.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Este objeto de dados já está associado a uma atividade.";l["LE_EndEdit_NotInEditMode"]="TerminarEdição não pode ser chamado na atividade especificada porque não está no modo de edição. IniciarEdição deve ser chamado primeiro antes que uma operação de edição de atividade possa ser confirmada.";l["LE_InvalidDayOfWeekRule"]="A regra do dia da semana especificada é inválida.";l["LE_MissingIdentifier"]="Identificador em falta.";l["LE_NoAppointmentItemsSource"]="O AppointmentItemsSource não foi atribuído.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="Não foi possível criar uma nova instância do objeto de dados. Deve especificar um valor para a propriedade CriarChamadaDeRetornoDoObjetoDeDadosDeCompromisso.";l["LE_NoDataObject"]="O objeto de dados subjacente da atividade especificada não existe na origem do item.";l["LE_NoPropertyMapping_Appointment"]="Não existe nenhum mapeamento de propriedades para a propriedade Compromisso '{0}'.";l["LE_RecurrenceParsing"]="Erro ao analisar recorrência, contexto: {0}";l["LE_RecurrenceSerializing"]="Erro ao serializar recorrência, contexto: {0}";l["LE_SchedulePropertyMap_Missing"]="Os seguintes mapeamentos de propriedade necessários não foram definidos:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Nenhuma propriedade pública denominada '{0}' foi encontrada no objeto de dados subjacente.";l["LIT_AgendaDayHeader_Today"]="Hoje";l["LIT_AgendaNoEventsMessage"]="Nenhum evento";l["LIT_AgendaStartTime_AllDay"]="o dia inteiro";l["LIT_AgendaStartTime_Ends"]="Termina";l["RD_And"]="e";l["RD_AtTime"]="às {0}";l["RD_Effective1"]="em vigor a partir de {0}";l["RD_Effective2"]="em vigor a partir de {0} até {1}";l["RD_Effective3"]="em vigor a partir de {0}, das {1} às {2}";l["RD_Effective4"]="em vigor a partir de {0} às {1}";l["RD_Effective5"]="em vigor a partir de {0} até {1} às {2}";l["RD_Effective6"]="em vigor a partir de {0} até {1}, das {2} às {3}";l["RD_Every"]="todos os {0} {1}";l["RD_FrequencyLiterals"]="ano, mês, semana, dia, hora, minuto, segundo";l["RD_FrequencyLiterals2"]="anualmente, mensalmente, semanalmente, diariamente, de hora em hora, minuciosamente, em segundo lugar";l["RD_FrequencyLiteralsPlural"]="anos, meses, semanas, dias, horas, minutos, segundos";l["RD_InMonth"]="em {0}";l["RD_Last"]="último";l["RD_NumberSuffix_nd"]="º";l["RD_NumberSuffix_rd"]="º";l["RD_NumberSuffix_st"]="º";l["RD_NumberSuffix_th"]="º";l["RD_OccurrenceOfThe"]="ocorrência do/a";l["RD_OfEveryMinuteOrHour"]="de cada {0}";l["RD_OfTheMonthOrYear"]="do {0}";l["RD_OfTheNthMinuteOrHour"]="do {0} {1}";l["RD_OnEach"]="em cada";l["RD_OnEverySecond"]="a cada segundo";l["RD_OnThe"]="no";l["RD_OnTheNthSecond"]="no {0} segundo";l["RD_Or"]="ou";l["RD_OrdinalDayOfMonthUsesSuffix"]="verdadeiro";l["RD_OrdinalNumberWithSuffix"]="{0} {1}";l["RD_RecurrenceDescriptionOverallStructure"]="Ocorre {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="repetindo {0} vezes";l["RD_RepeatingOneTime"]="repetindo uma vez";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="até ao/à último(a)";l["RD_Weekday"]="dia da semana";l["RD_WeekendDay"]="fim de semana";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="O valor '{0}' não pôde ser analisado com êxito.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="A propriedade {0} não pode ser modificada porque esta instância já foi adicionada a uma coleção HorasDeTrabalho.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});