using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using DofusApi.Data;
using DofusApi.Models;
using Microsoft.EntityFrameworkCore;


namespace DofusApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
            });

            services.AddControllers();
            services.AddDbContext<DofusDataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DofusDataContext")));

            /*****

            Registering My Repo Services

            *****/
            services.AddScoped<IBaseRepository<Classe>,BaseRepository<Classe>>();
            services.AddScoped<IBaseRepository<Consumable>,BaseRepository<Consumable>>();
            services.AddScoped<IBaseRepository<MonsterArea>,BaseRepository<MonsterArea>>();
            services.AddScoped<IBaseRepository<WeaponChar>,BaseRepository<WeaponChar>>();
            services.AddScoped<IBaseRepository<Decor>,BaseRepository<Decor>>();
            services.AddScoped<IBaseRepository<MonsterDrop>,BaseRepository<MonsterDrop>>();
            services.AddScoped<IBaseRepository<Equipment>,BaseRepository<Equipment>>();
            services.AddScoped<IBaseRepository<ForumCategory>,BaseRepository<ForumCategory>>();
            services.AddScoped<IBaseRepository<ForumComment>,BaseRepository<ForumComment>>();
            services.AddScoped<IBaseRepository<ForumReport>,BaseRepository<ForumReport>>();
            services.AddScoped<IBaseRepository<ForumLike>,BaseRepository<ForumLike>>();
            services.AddScoped<IBaseRepository<Furniture>,BaseRepository<Furniture>>();
            services.AddScoped<IBaseRepository<Ground>,BaseRepository<Ground>>();
            services.AddScoped<IBaseRepository<Harness>,BaseRepository<Harness>>();
            services.AddScoped<IBaseRepository<Harvest>,BaseRepository<Harvest>>();
            services.AddScoped<IBaseRepository<HavenBag>,BaseRepository<HavenBag>>();
            services.AddScoped<IBaseRepository<Idol>,BaseRepository<Idol>>();
            services.AddScoped<IBaseRepository<Location>,BaseRepository<Location>>();
            services.AddScoped<IBaseRepository<Monster>,BaseRepository<Monster>>();
            services.AddScoped<IBaseRepository<Mount>,BaseRepository<Mount>>();
            services.AddScoped<IBaseRepository<Pet>,BaseRepository<Pet>>();
            services.AddScoped<IBaseRepository<Privilege>,BaseRepository<Privilege>>();
            services.AddScoped<IBaseRepository<Profession>,BaseRepository<Profession>>();
            services.AddScoped<IBaseRepository<HarnessRecipe>,BaseRepository<HarnessRecipe>>();
            services.AddScoped<IBaseRepository<IdolRecipe>,BaseRepository<IdolRecipe>>();
            services.AddScoped<IBaseRepository<EquipmentRecipe>,BaseRepository<EquipmentRecipe>>();
            services.AddScoped<IBaseRepository<ResourceRecipe>,BaseRepository<ResourceRecipe>>();
            services.AddScoped<IBaseRepository<WeaponRecipe>,BaseRepository<WeaponRecipe>>();
            services.AddScoped<IBaseRepository<Resource>,BaseRepository<Resource>>();
            services.AddScoped<IBaseRepository<RolePrivilege>,BaseRepository<RolePrivilege>>();
            services.AddScoped<IBaseRepository<Role>,BaseRepository<Role>>();
            services.AddScoped<IBaseRepository<Set>,BaseRepository<Set>>();
            services.AddScoped<IBaseRepository<Spell>,BaseRepository<Spell>>();
            services.AddScoped<IBaseRepository<ConsumableStatistic>,BaseRepository<ConsumableStatistic>>();
            services.AddScoped<IBaseRepository<IdolStatistic>,BaseRepository<IdolStatistic>>();
            services.AddScoped<IBaseRepository<MonsterStatistic>,BaseRepository<MonsterStatistic>>();
            services.AddScoped<IBaseRepository<MountStatistic>,BaseRepository<MountStatistic>>();
            services.AddScoped<IBaseRepository<PetStatistic>,BaseRepository<PetStatistic>>();
            services.AddScoped<IBaseRepository<EquipmentStatistic>,BaseRepository<EquipmentStatistic>>();
            services.AddScoped<IBaseRepository<SetStatistic>,BaseRepository<SetStatistic>>();
            services.AddScoped<IBaseRepository<WeaponStatistic>,BaseRepository<WeaponStatistic>>();
            services.AddScoped<IBaseRepository<User>,BaseRepository<User>>();
            services.AddScoped<IBaseRepository<Weapon>,BaseRepository<Weapon>>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "DofusApi", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DofusApi v1"));
            }
            app.UseCors("CorsPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
