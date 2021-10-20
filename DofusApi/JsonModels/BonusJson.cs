using System.Collections.Generic;

namespace DofusApi.JsonModels
{
    public class BonusJson
    {
        public int Number { get; set; }
        public virtual ICollection<StatisticSetJson> Stats { get; set; }

    }
}