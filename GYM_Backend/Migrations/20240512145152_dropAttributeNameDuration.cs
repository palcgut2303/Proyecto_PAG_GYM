using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class dropAttributeNameDuration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "24a99a06-d854-4ba6-bbb2-bc0157d6d654");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73a55ea4-019d-4738-8c6d-08efc30274af");

            migrationBuilder.DropColumn(
                name: "DurationInMinutes",
                table: "Classes");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Classes");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07cdd595-7d79-48cc-b8e6-a0bab718f6f5", null, "Instructor", "INSTRUCTOR" },
                    { "7239a103-5b55-4e12-b258-80c0ba8fc6df", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07cdd595-7d79-48cc-b8e6-a0bab718f6f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7239a103-5b55-4e12-b258-80c0ba8fc6df");

            migrationBuilder.AddColumn<int>(
                name: "DurationInMinutes",
                table: "Classes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Classes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "24a99a06-d854-4ba6-bbb2-bc0157d6d654", null, "User", "USER" },
                    { "73a55ea4-019d-4738-8c6d-08efc30274af", null, "Instructor", "INSTRUCTOR" }
                });
        }
    }
}
