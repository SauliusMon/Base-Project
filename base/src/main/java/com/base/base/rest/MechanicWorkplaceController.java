package com.base.base.rest;

import com.base.base.mapper.MechanicMapper;
import com.base.base.mapper.MechanicWorkplaceMapper;
import com.base.base.rest.dto.MechanicDto;
import com.base.base.rest.dto.MechanicWorkplaceDto;
import com.base.base.service.MechanicService;
import com.base.base.service.MechanicWorkplaceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.base.base.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/workplace")
public class MechanicWorkplaceController {

    private final MechanicWorkplaceService mechanicWorkplaceService;


    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-mechanic-workplace")
    public ResponseEntity<MechanicWorkplaceDto> getMechanicById (@RequestParam Long mechanicWorkplaceID) {
        return ResponseEntity.ok(mechanicWorkplaceService.getMechanicWorkplaceByID(mechanicWorkplaceID));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping("/update-mechanic-workplace")
    public void updateMechanic (@RequestBody MechanicWorkplaceDto mechanicWorkplaceDto) {
        mechanicWorkplaceService.updateMechanicWorkplace(mechanicWorkplaceDto);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-mechanic-workplaces")
    public ResponseEntity<List<MechanicWorkplaceDto>> getAllMechanicsWorkplaces () {
        return ResponseEntity.ok(mechanicWorkplaceService.getMechWs());
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PostMapping("/create-mechanic-workplace")
    public void createMechanicWorkplace (@RequestBody MechanicWorkplaceDto mechWDtoToCreate) {
        mechanicWorkplaceService.saveMechW(MechanicWorkplaceMapper.mechWDtoToMechW(mechWDtoToCreate));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @DeleteMapping("/delete-mechanic-workplace")
    public void deleteMechanicWorkplace (@RequestParam Long mechanicWorkplaceID) {
        mechanicWorkplaceService.deleteMechW(mechanicWorkplaceID);
    }
}
