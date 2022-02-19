﻿// <auto-generated />
using System;
using DofusApi.Hdv.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DofusApi.Hdv.Migrations
{
    [DbContext(typeof(DofusHdvDataContext))]
    partial class DofusHdvDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DofusApi.Hdv.Models.ConsumablePrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("ConsumablePrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.EquipmentPrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("EquipmentPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.EquipmentStatistic", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EquipmentPriceID")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("EquipmentPriceID");

                    b.ToTable("EquipmentStatistic");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.PetPrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("PetPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.PetStatistic", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PetPriceID")
                        .HasColumnType("int");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PetPriceID");

                    b.ToTable("PetStatistic");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.ResourcePrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("ResourcePrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.RunePrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("RunePrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.WeaponPrice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Server")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("WeaponPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.WeaponStatistic", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.Property<int>("WeaponPriceID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("WeaponPriceID");

                    b.ToTable("WeaponStatistic");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.EquipmentStatistic", b =>
                {
                    b.HasOne("DofusApi.Hdv.Models.EquipmentPrice", "EquipmentPrice")
                        .WithMany("Statistics")
                        .HasForeignKey("EquipmentPriceID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("EquipmentPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.PetStatistic", b =>
                {
                    b.HasOne("DofusApi.Hdv.Models.PetPrice", "PetPrice")
                        .WithMany("Statistics")
                        .HasForeignKey("PetPriceID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PetPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.WeaponStatistic", b =>
                {
                    b.HasOne("DofusApi.Hdv.Models.WeaponPrice", "WeaponPrice")
                        .WithMany("Statistics")
                        .HasForeignKey("WeaponPriceID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WeaponPrice");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.EquipmentPrice", b =>
                {
                    b.Navigation("Statistics");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.PetPrice", b =>
                {
                    b.Navigation("Statistics");
                });

            modelBuilder.Entity("DofusApi.Hdv.Models.WeaponPrice", b =>
                {
                    b.Navigation("Statistics");
                });
#pragma warning restore 612, 618
        }
    }
}
